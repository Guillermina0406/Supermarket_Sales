require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json({ limit: '1mb' }));

const PORT = process.env.PORT || 3000;
const OPENAI_KEY = process.env.OPENAI_API_KEY;

if (!OPENAI_KEY) {
  console.warn('Warning: OPENAI_API_KEY not set. Set it in .env or environment variables.');
}

app.post('/api/chat', async (req, res) => {
  const { question, summary, sample } = req.body || {};
  if (!question) return res.status(400).json({ error: 'question is required' });
  if (!OPENAI_KEY) return res.status(500).json({ error: 'Server missing OPENAI_API_KEY' });

  const prompt = `Eres un asistente que responde en español sobre un dataset de ventas de supermercado. Responde de forma concisa.\n\nResumen:\n- Filas: ${summary?.rows || 'N/A'}\n- Ventas totales: ${summary?.totalRevenue ? Number(summary.totalRevenue).toFixed(2) : 'N/A'}\n- Ticket promedio: ${summary?.avgTicket ? Number(summary.avgTicket).toFixed(2) : 'N/A'}\n- Product lines: ${summary?.products ? summary.products.join(', ') : 'N/A'}\n- Ciudades: ${summary?.cities ? summary.cities.join(', ') : 'N/A'}\n- Géneros: ${summary?.genders ? summary.genders.join(', ') : 'N/A'}\n- Fecha rango: ${summary?.dateMin ? summary.dateMin : 'N/A'} a ${summary?.dateMax ? summary.dateMax : 'N/A'}\n\nMuestras (hasta 10 filas):\n${sample ? JSON.stringify(sample, null, 2) : 'N/A'}\n\nPregunta: ${question}\n\nRespuesta:`;

  try {
    const resp = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: 'Eres un asistente que responde en español sobre un dataset de ventas. Usa la información provista.' },
          { role: 'user', content: prompt }
        ],
        max_tokens: 600,
        temperature: 0.2
      })
    });

    if (!resp.ok) {
      const txt = await resp.text();
      return res.status(resp.status).json({ error: txt });
    }

    const data = await resp.json();
    const text = (data.choices && data.choices[0] && (data.choices[0].message?.content || data.choices[0].text)) || JSON.stringify(data);
    res.json({ reply: text });
  } catch (err) {
    console.error('Error calling OpenAI:', err);
    res.status(500).json({ error: err.message || String(err) });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server listening on http://localhost:${PORT}`);
});
