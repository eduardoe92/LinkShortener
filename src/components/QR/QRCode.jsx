import { useState } from "react";
import ActionButtons from "./ActionButtons";
import QRDisplay from "./QRDisplay";
import TextInput from "./TextInput";
import { PropTypes } from 'prop-types';

const QRCode = ({ initialData }) => {
    const [qrData, setQrData] = useState(initialData);

    return (
        <div className="flex items-center justify-center h-screen">
            <section>
                <TextInput setQrData={setQrData} />
                <QRDisplay initialData={qrData} />
                <ActionButtons />
            </section>
        </div>
    );
};

QRCode.propTypes = {
    initialData: PropTypes.string.isRequired,
};

export default QRCode;