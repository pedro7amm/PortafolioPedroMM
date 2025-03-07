import ProfilePicture from '../../assets/images/ProfilePic.jpg';
import logoReact from '../../assets/images/ReactLogo.png';
import logoJavaScript from '../../assets/images/JavaScriptLogo.png';
import logoHTML from '../../assets/images/htmlLogo.jpg';
import logoCSS from '../../assets/images/cssLogo.jpg';
import logoGit from '../../assets/images/gitLogo.jpg';
import logoMySQL from '../../assets/images/mysqlLogo.jpg';
import logoJava from '../../assets/images/logoJava.jpg';
import logoCisco from '../../assets/images/logoCisco.jpg';


const Home = () => {
    return (
        <div className="flex flex-col md:flex-row w-full mx-auto gap-5 p-5 items-center">
            {/* Imagen de perfil */}
            <div className="w-full md:w-1/3 flex justify-center">
                <img className="border-5 rounded-[150px] border-[#042954] w-full max-w-md md:max-w-lg"
                     src={ProfilePicture}
                     alt="Personal Picture"/>
            </div>

            {/*info section*/}
            <div className="w-full md:w-2/3 text-white p-6 flex flex-col gap-5">
                {/* About Me section*/}
                <div className="bg-[#042954] p-5 rounded-3xl shadow-lg">
                    <h2 className="text-2xl font-bold">About Me</h2>
                    <p>
                        A developer with web development experience, databases, networking, cloud computing, testing,
                        and agile methodologies. My experience has been primarily focused on the delivery of successful
                        web development projects.
                    </p>
                </div>

                {/* Hard Skills section */}
                <div className="bg-[#042954] p-5 rounded-3xl shadow-lg">
                    <h2 className="text-2xl font-bold mb-4 text-center">Hard Skills</h2>
                    <div className="grid grid-cols-3 md:grid-cols-4 gap-6 place-items-center">
                        {[
                            {img: logoReact, name: "React"},
                            {img: logoJavaScript, name: "JavaScript"},
                            {img: logoHTML, name: "HTML5"},
                            {img: logoCSS, name: "CSS3"},
                            {img: logoGit, name: "Git"},
                            {img: logoMySQL, name: "MySQL"},
                            {img: logoJava, name: "CCNA"},
                            {img: logoCisco, name: "CCNA"},
                        ].map((technology, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <img className="w-16 h-16 object-contain" src={technology.img} alt={technology.name}/>
                                <p className="text-sm font-bold mt-3">{technology.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
