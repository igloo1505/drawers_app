import type { NextPage } from 'next'
import ToggleButton from '../components/app/ToggleButton'
import { connect } from 'react-redux';
import { RootState } from '../state/store';
import { setAuthenticated } from '../state/actions/syncActions';
import styles from '../styles/testing.module.css'

const connector = connect((state: RootState, props: any) => ({
    auth: state.auth,
    props: props
}))



const Testing: NextPage = connector(({ auth: { authenticated } }) => {
    return (
        <div className={styles.pageWrapper}>
            <div className={styles.testingTitle}>
            Testing utilities
            </div>
            <div className={styles.testingSubtitle}>
                This is just for easily and quickly switching states while in development. <br/> This won&apos;t make it into the public app.
            </div>
            <div className={styles.buttonContentContainer}>
                <div className={styles.buttonContainerText}>Toggle User&apos;s logged in status:</div>
                <div className={styles.buttonContainerBtn}>
                    <ToggleButton onLabel="Authenticated" offLabel="Un-Authenticated" onIcon="pi pi-check" offIcon="pi pi-times"
                        checked={authenticated} onChange={(e) => setAuthenticated(e.value)} />
                </div>
            </div>
        </div>
    )
})

export default Testing
