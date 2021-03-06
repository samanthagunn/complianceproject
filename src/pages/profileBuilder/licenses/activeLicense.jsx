import { useEffect, useState } from 'react';
import {
    IonButton,
    IonItem,
    IonLabel,
    IonCard,
    IonCardTitle,
    IonCardContent,

} from "@ionic/react";

import MyAccordion from "../../../components/accordian";
import { getAllLicenses } from '../../../utils/api';
// import LicenseLoad from './licenseLoad';

const ActiveLicense = () => {
    const [licenses, setLicense] = useState([]);


    useEffect(() => {
        getAllLicenses()
            .then(({ data: activelicenses }) => setLicense(activelicenses))
            .catch((err) => console.log(err));
    }, []);


    return (
        <>
            <IonCard className="cardPrimary" ><IonCardTitle className="ion-padding" color="success">Active</IonCardTitle>
                <IonCardContent>
                    <MyAccordion

                        list={licenses}
                        renderHeader={(item) => {
                            return (
                                <span style={{ fontWeight: "bold", textTransform: "uppercase" }}>
                                    {item.state} <br /> {item.type}
                                </span>
                            );
                        }}
                        renderPanel={(item) => {
                            const dateFix = item.expiration.split('T')[0].split('-').join('/');
                            return (
                                <div>
                                    <IonItem style={{ "--padding-start": 0 }}>

                                        <IonLabel>
                                            <div>
                                                {" "}
                                                Expiration: {dateFix}
                                            </div>

                                            <div> Is Compact? {item.compact}</div>
                                            {/* <div className="ion-text-wrap">{item.body}</div> */}
                                        </IonLabel>
                                    </IonItem>
                                    <div style={{ padding: 6 }}>
                                        <IonButton
                                            className="ion-float-right"
                                            style={{ zoom: 0.9 }}
                                            href='/licensetest'
                                        >
                                            EDIT
                                        </IonButton>
                                    </div>
                                </div>
                            );
                        }}
                    />
                </IonCardContent>
            </IonCard>
            {/* <LicenseLoad /> */}
        </>


    );
};



export default ActiveLicense;