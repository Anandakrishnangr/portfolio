import Image from "next/image"
import { Button } from "../form"

const AboutMe = () => {
    return (
        <div className=" content-center">
            <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start   gap-10">
                <div className="w-full lg:w-1/4 text-center lg:text-left ">
                    <div className="justify-items-center">
                        <Image
                            src="/ananda.png"
                            width={200}
                            height={200}
                            alt="avatar"
                            className="mx-auto lg:mx-0 rounded-full border-4 border-primary"
                        />
                    </div>
                    <h1 className="text-2xl font-semibold mt-4 text-center">Ananda Krishnan GR</h1>
                    <h2 className="text-lg text-center">Software Engineer</h2>
                    <div>
                        <h6 className="text-sm text-center mt-2">
                            Master of Computer Application<br />
                            Amrita University
                        </h6>
                        <h6 className="text-sm text-center mt-1">
                            Bachelor of Computer Science<br />
                            University Institute Of Technology<br />
                            Kerala University
                        </h6>
                    </div>
                </div>

                <div className="w-full lg:w-3/4 self-center">
                    <h1 className="text-3xl font-bold mb-4">About Me</h1>
                    <div className="text-sm text-justify mb-6">
                        My career as a Software Engineer has been marked by a continuous pursuit of growth and a passion
                        for tackling complex challenges. Starting with an internship at Softzane Solutions, I built a foundation
                        in full-stack development before contributing to significant projects at VIPAR, where I honed my skills
                        in technologies like TypeScript. My current role at TheX Techvent Pvt Ltd. allows me to focus on scalable
                        solutions and cloud infrastructure using AWS. Complementing my practical experience is a strong academic background
                        with a Master&apos;s and Bachelor&apos;s degree in Computer Science. My proactive approach to learning is demonstrated by a diverse portfolio
                        of certifications in cutting-edge technologies, ensuring I remain well-equipped to contribute to innovative projects.
                    </div>
                    <div className="flex flex-wrap gap-4">
                        <Button>Experience</Button>
                        <Button>Education</Button>
                        <Button>Skills</Button>
                        <Button>Trainings</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe
