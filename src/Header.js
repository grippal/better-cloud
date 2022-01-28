

const Header = () => {
    return (
        <div>
            <div className="flex flex-row justify-center items-end font-Inter mt-40 mb-12">
                <h1 className="font-Inter text-5xl px-6">Hi </h1>
                <img src={require("./images/bettercloud-logo.png")} className="bettercloud-logo h-16 mb-2" alt="logo" />
                <h1 className="font-Inter text-5xl px-6"> employee!</h1>
            </div>
            <div className="flex justify-center my-16">
                <p className="font-Inter text-2xl w-2/3">My name is Luke and welcome to my site! To find out what makes me unique, decrypt the secret message below.</p>
            </div>
        </div>
    );
  }
  
  export default Header;