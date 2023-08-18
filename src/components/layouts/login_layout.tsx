import { LoginLayoutProps } from "@/types/components/login";

const LoginLayout = ({children}: LoginLayoutProps) => {

  return (
    <section className="bg-primary-bg-black">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
        <div className="bg-white rounded-lg shadow w-380 h-710 sm:w-600 sm:h-582 lg:w-380">
          <div className="h-full bg-[#fff] rounded-[8px] p-6 flex flex-col items-center justify-center">
           {children}
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginLayout;