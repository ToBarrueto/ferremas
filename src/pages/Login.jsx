const Login = () => {
  return (
    <div className="container-custom2 d-flex justify-content-center vh-70">
{/* Suggested code may be subject to a license. Learn more: ~LicenseLog:524359200. */}
      <div className="card mt-4 " style={{ width: "100%", maxWidth: "400px" , height: "400px" }}>
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
