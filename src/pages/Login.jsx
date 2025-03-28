const Login = () => {
  return (
    <div className="d-flex justify-content-center vh-70">
      <div className="card mt-4 " style={{ width: "100%", maxWidth: "400px" }}>
        <div className="card-body">
          <h1 className="card-title text-center mb-4">Iniciar Sesión</h1>
          <form>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Usuario</label>
              <input type="text" className="form-control" id="username" placeholder="Usuario" required />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Contraseña</label>
              <input type="password" className="form-control" id="password" placeholder="Contraseña" required />
            </div>
            <button type="submit" className="btn btn-primary w-100">Ingresar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
