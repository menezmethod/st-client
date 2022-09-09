import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setSnackbar} from '@/redux/models/snackbar';
import {AppDispatch, RootState} from '@/redux/createStore';
import {TransitionProps} from '@mui/material/transitions';
import Snackbar from '@mui/material/Snackbar';
import {Fade} from "@mui/material";

const CustomizedSnackbars = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [state, setState] = React.useState<{
        open: boolean;
        Transition: React.ComponentType<TransitionProps & {
            children: React.ReactElement<any, any>;
        }>;
    }>({
        open: false,
        Transition: Fade,
    });
    const snackbarOpen = useSelector<RootState, boolean>((state) => state.snackbar.snackbarOpen);
    const snackbarType = useSelector<RootState, any>((state) => state.snackbar.snackbarType);
    const snackbarMessage = useSelector<RootState, any>((state) => state.snackbar.snackbarMessage);

    const handleClose = () => {
        dispatch(setSnackbar(false, snackbarType, snackbarMessage));
    };

    return (
        <div>
            <Snackbar
                open={snackbarOpen}
                onClose={handleClose}
                TransitionComponent={state.Transition}
                message={snackbarMessage}
                key={state.Transition.name}
            />
        </div>
    );
};

export default CustomizedSnackbars;
