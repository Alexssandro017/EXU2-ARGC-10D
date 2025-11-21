import { useState } from 'react'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de instalar bootstrap

function App() {
  const [nums, setNums] = useState({ num1: '', num2: '' });
  const [result, setResult] = useState(null);

  const handleSumar = async (e) => {
    e.preventDefault();
    try {
      // Petición al puerto 8081 (Puerto de la PC para el backend)
      const response = await fetch(`http://localhost:8081/api/calculate/sum?num1=${nums.num1}&num2=${nums.num2}`);
      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error("Error:", error);
      alert("Error al conectar con el servidor");
    }
  };

  return (
    <div>
      {/* NAVBAR REQUERIDO */}
      <nav className="navbar navbar-dark bg-primary mb-5">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">
            Alexsandro Rodriguez - 10D - Examen Unidad 2
          </span>
        </div>
      </nav>

      <div className="container">
        <div className="card shadow-sm" style={{ maxWidth: '500px', margin: '0 auto' }}>
          <div className="card-header bg-light">
            <h4 className="mb-0">Calculadora de Suma</h4>
          </div>
          <div className="card-body">
            <form onSubmit={handleSumar}>
              <div className="mb-3">
                <label className="form-label">Número 1</label>
                <input
                  type="number"
                  className="form-control"
                  value={nums.num1}
                  onChange={(e) => setNums({ ...nums, num1: e.target.value })}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Número 2</label>
                <input
                  type="number"
                  className="form-control"
                  value={nums.num2}
                  onChange={(e) => setNums({ ...nums, num2: e.target.value })}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Sumar
              </button>
            </form>

            {result && (
              <div className="alert alert-success mt-4 text-center">
                <strong>{result.message}</strong>
                <h1>Resultado: {result.data}</h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
