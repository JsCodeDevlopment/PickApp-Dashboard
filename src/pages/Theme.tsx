import { Header } from "../components/Header";
import { Themes } from "../components/Themes";
import { IThemeOptions } from "../interfaces/IThemes";

export function Theme() {
  return (
    <div className="bg-base-100 w-full h-screen overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-thumb-neutral scrollbar-track-base-100">
      <Header />
      <div className="flex w-full h-screen py-10 items-start justify-center">
        <div className="flex gap-5 flex-col flex-wrap items-center justify-center">
          <h1 className="text-2xl font-semibold text-neutral-content">
            Escolha um tema para seu dashboard
          </h1>
          <p className="text-neutral-content">Vamos dar uma colorida nessa tela!?</p>
          <div className="flex gap-4 w-full flex-wrap p-8 items-center justify-center">
            {Object.entries(IThemeOptions).map(([theme]) => (
              <Themes key={theme} theme={theme as keyof typeof IThemeOptions} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
