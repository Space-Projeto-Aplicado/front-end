import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-screen flex">

      <div className="bg-white w-1/2 flex items-center justify-center">
        <Image src="/space.svg" alt="Space Image" width={400} height={400} />
      </div>

      <main className="bg-gray-200 w-1/2 flex items-center justify-center text-black">

        <div>
          <h1 className="font-bold text-3xl">Entre com sua conta</h1>

          <div className="flex">
            <h1>Não tem uma conta?</h1>
            <a className="ml-2">Cadastre-se</a>
          </div>

          <input
            type="email"
            placeholder="Email"
            className="w-full mt-14 border-2 border-gray-300 p-2 bg-white rounded-lg" />

          <input
            type="password"
            placeholder="Senha"
            className="w-full mt-4 border-2 border-gray-300 p-2 bg-white rounded-lg" />

          {/* <a>Esqueci a senha</a> */}

          <button className="w-full mt-14 bg-black rounded-sm text-white p-2">
            Entrar
          </button>

          <div className="flex mt-12 justify-between w-full">
            <hr className="flex-1 border w-full border-gray-400 my-3" />
            <h1 className="mx-10 text-gray-500">Ou entre com</h1>
            <hr className="flex-1 border w-full border-gray-400 my-3" />
          </div>

          <div className="flex justify-between w-full mt-12">
            <button className="border border-gray-400 rounded-sm px-20 py-1.5">
              Google
            </button>

            <button className="border border-gray-400 rounded-sm px-20 py-1.5">
              Telefone
            </button>
          </div>

        </div>

      </main>

    </div>
  );
}