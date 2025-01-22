import React, { Component } from 'react'
import ProductItem from './ProductItem';

export default class ProductList extends Component {

    productList = [
        {
            "maSP": 1,
            "tenSP": "VinSmart Live",
            "manHinh": "AMOLED, 6.2, Full HD+",
            "heDieuHanh": "Android 9.0 (Pie)",
            "cameraTruoc": "20 MP",
            "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 5700000,
            "hinhAnh": "https://res.cloudinary.com/dtjin3cf6/image/upload/v1668879610/Cyberlearn/ReactJS/Course%202%20-%20ReactJS%20Components/Projects/redux_cart/vsphone_tyiuzf.jpg"
        },
        {
            "maSP": 2,
            "tenSP": "Meizu 16Xs",
            "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels",
            "heDieuHanh": "Android 9.0 (Pie); Flyme",
            "cameraTruoc": "20 MP",
            "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 7600000,
            "hinhAnh": "https://res.cloudinary.com/dtjin3cf6/image/upload/v1668879619/Cyberlearn/ReactJS/Course%202%20-%20ReactJS%20Components/Projects/redux_cart/meizuphone_wkjbo6.jpg"
        },
        {
            "maSP": 3,
            "tenSP": "Iphone XS Max",
            "manHinh": "OLED, 6.5, 1242 x 2688 Pixels",
            "heDieuHanh": "iOS 12",
            "cameraSau": "Chính 12 MP & Phụ 12 MP",
            "cameraTruoc": "7 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 27000000,
            "hinhAnh": "https://res.cloudinary.com/dtjin3cf6/image/upload/v1668879622/Cyberlearn/ReactJS/Course%202%20-%20ReactJS%20Components/Projects/redux_cart/applephone_d7kmgh.jpg"
        }
    ];

    renderProductList = () => {
        return this.productList.map((product, index) => {
            return (
                <div className="col-4" key={index}>
                    <ProductItem product={product}/>
                </div>  
            )
        })
    }
á
    render() {
        return (
            <div className="row">
                {this.renderProductList()}
            </div>
        )
    }
}
