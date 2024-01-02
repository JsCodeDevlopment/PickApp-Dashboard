export function VerifiedEmail() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Verificação Bem Sucedida!</h1>
          <p className="py-6">
            Parabéns! Seu e-mail foi verificado com sucesso. Clique abaixo e
            faça seu login.
          </p>
          <a href="/">
            <button className="btn btn-primary">Fazer Login</button>{" "}
          </a>
        </div>
      </div>
    </div>
  );
}
