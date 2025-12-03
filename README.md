# 🛒 Supermarket Sales Analysis

Este proyecto analiza un dataset de ventas de supermercado con el objetivo de explorar el comportamiento de compra, identificar patrones y generar visualizaciones claras para la toma de decisiones.  
El análisis se realizó en Python dentro de GitHub Codespaces, utilizando librerías como `pandas`, `matplotlib` y `seaborn`.

---

## 📊 Dataset utilizado

**Archivo:** `supermarket_sales.csv`  
**Fuente:** Kaggle – Supermarket Sales Dataset  
**Registros:** 1000  
**Columnas principales:**

- Invoice ID  
- Branch (A, B, C)  
- City  
- Customer Type  
- Gender  
- Product Line  
- Unit Price  
- Quantity  
- Tax 5%  
- Total  
- Date  
- Time  
- Payment  
- Rating  

---

## 🎯 Objetivos del análisis

1. Explorar la estructura del dataset.  
2. Analizar ventas por diferentes dimensiones (producto, ciudad, cliente).  
3. Identificar patrones clave en el comportamiento de compra.  
4. Generar visualizaciones para insights accionables.  

---

## 📈 Análisis realizado

### ✔ Top 3 Product Lines
Identificación de las líneas de producto con mayor facturación total.

### ✔ Facturación por Ciudad
Comparación de ventas entre las sucursales de:
- Yangon  
- Naypyitaw  
- Mandalay  

### ✔ Ticket Promedio
Cálculo del valor promedio por factura (Average Transaction Value).

### ✔ Curva Mensual de Ventas
Tendencia de facturación a lo largo del tiempo, utilizando una columna derivada `YearMonth`.

---

## 🧪 Tecnologías utilizadas

- **Python 3**
- `pandas`
- `matplotlib`
- `seaborn`
- GitHub Codespaces



