import myPDF from "../assets/Garlen_Chan_Resume-DRI8ZB52.pdf"
import "./resume.css"

const Resume = () => {
    return (
        <div className="siteStructureResume">
            <iframe src={myPDF} className="resumePDF"></iframe>
        </div>
    );
};

export default Resume;