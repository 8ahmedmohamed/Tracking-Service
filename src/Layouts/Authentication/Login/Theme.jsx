import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
    return {
        root: {
            width: '100%',
            display: 'flex',
            minHeight: '100vh',
            alignItems: 'center',
            justifyContent: 'center'
        },
        container: {
            display: 'flex',
            justifyContent: 'center',
            width: '600px',
            padding: '25px',
            '& form': {
                display: 'flex',
                flexDirection: 'column',
                gap: '15px'
            }
        }
    }
});

export default useStyles;