import {
    IonButton,
    IonContent,
    IonHeader,
    IonItem,
    IonLabel,
    IonPage,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardTitle,
    IonCardContent,
    IonGrid,
    IonRow,
    IonCol,

} from "@ionic/react";

import Header from '../../../layout/Header';
import CertLoad from './certLoader';
import ActiveCerts from './activeCerts';
import ExpiringCerts from './expiringCerts';
import MissingCerts from './missingCerts';

const AllCerts = () => {



    // useEffect(() => {
    //     fetch("src/licenses.json")
    //         .then((r) => r.json())
    //         .then((d) => setLicense(d.results));
    // }, []);



    return (
        <div className="backgroundColor">
            <IonPage>
                <Header />

                <IonContent fullscreen className="ion-padding">
                    <div className="profileContainer">
                        <IonHeader><IonTitle className="documentHeader">Certifcations</IonTitle></IonHeader>

                        <IonGrid>
                            <IonRow>
                                <IonCol>

                                    <MissingCerts />

                                </IonCol>
                                <IonCol>
                                    <ExpiringCerts />
                                </IonCol>
                                <IonCol>
                                    <ActiveCerts />
                                </IonCol>
                            </IonRow>


                        </IonGrid>
                    </div>
                    <CertLoad />
                </IonContent>
            </IonPage>
        </div>

    );
};


export default AllCerts;