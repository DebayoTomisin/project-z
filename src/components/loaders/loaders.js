import Loader from "react-loader-spinner";
import './loader.css'

export const ButtonLoader = () =>
(
    <div className="btn">
        <Loader type='Oval' color='black' width='26' height='26' />
    </div>
)

export const PageLoader = () =>
(
    <div className='page'>
        <Loader type="Oval" color="#036CDF" width="56" height="56" />
    </div>
)

export const BlockLoader = () =>
(
    <div className="block">
        <Loader type="TailSpin" color="#036CDF" width="46" height="46" />
    </div>
)

export const ScrollLoader = () =>
(
    <div className="scroll">
        <Loader type="ThreeDots" color="#f8f8fa" width="25" height="25" />
    </div>
)