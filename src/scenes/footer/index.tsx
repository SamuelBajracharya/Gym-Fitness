import Logo from '@/assets/Logo.png';

const Footer = () => {
    return (
        <footer className="bg-primary-100 py-16">
            <div className="justify-coenter mx-auto w-5/6 gap-16 md:flex">
                <div className="mt-16 basis-1/2 md:mt-0">
                    <img src={Logo} alt="logo"/>
                    <p className="my-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                        doloremque, voluptatum, quas, quidem quia voluptates voluptate
                        voluptatum, quas, quidem quia voluptates.
                    </p>
                    <p>© Gym 2023, All Rights Reserved</p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Links</h4>
                    <p className="my-5">Massa orci senectus</p>
                    <p className="my-5">Et gravida id et etiam</p>
                    <p>Ullamcorper vivamus</p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Contact Us</h4>
                    <p className="my-5">Tempus metus mattis risus volupat egestas.</p>
                    <p>+977-9909090901</p>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
