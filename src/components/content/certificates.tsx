'use client'
import about from './about.json'

export const Certificate = () => {
    const handleCertificateClick = (url: string) => {
        window.open(url, '_blank');
    };
    return <div className="lg:mx-24 my-12 ">
        <h1 className='text-2xl  my-8'>   Trainings & Certifications</h1>
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-900 dark:divide-gray-700">

                {about.certification.map((element, index) => {
                    return <tr key={'e' + index} onClick={() => handleCertificateClick(element.link)}
                        className='hover:bg-green-900 cursor-pointer'
                    >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-300">
                            {element.title}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-end text-gray-500 dark:text-gray-400">
                            {element.issued_by}, {element.date}
                        </td>
                    </tr>
                })}


            </tbody>
        </table>
        <div  className='py-3'>
            More can be found on my profiles: Google Cloud Skills Boost, Google for Developers, Coursera, Credly, Scrum.org.
        </div>

    </div>
}