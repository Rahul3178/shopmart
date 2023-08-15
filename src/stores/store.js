import { configureStore } from "@reduxjs/toolkit";
import{CartSlicer} from '../slices/CartSlicer'

export default configureStore(
    {
        reducer:{
            store:CartSlicer.reducer,
        },
    }
)