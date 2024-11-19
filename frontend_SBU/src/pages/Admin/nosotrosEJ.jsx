import React from "react";
import { Link } from "react-router-dom";


function Nosotros() {
    return (
        <div className=" bg-slate-600 min-h-screen">
            <div className=" h-24 ">
            </div>
            <div className=" text-center justify-center items-center text-5xl h-20 text-fuchsia-700 gap-14 font-bold mt-16">
                <h1>Acerca de nosotros</h1>
            </div>
            <div className=" text-center  text-white h-40">
                <p>Nosotros somos una Aplicación Web dirigida a la venta de gadgets. Markdget se crea en el año 2023,
                    esta idea surge entre 3 compañeros.
                    <br />Esto como un proyecto, en el cuál nos basamos en la problemática de las tiendas físicas de
                    gadgets, ya que no tienen buenas ventas. Al
                    <br />igual se analizó la parte del usuario, y nos dimos cuenta que se les dificulta encontrar sus
                    productos en tiendas físicas, al igual que el pago
                    <br />suele ser díficil, ya que puede ser que la tienda no tenga cambio. Así que con este proyecto
                    tratamos de que las tiendas suban sus ventas de
                    <br />sus productos y sean reconocidas a nivel nacional, y también que los usuarios tengan una manera
                    muy accesible de adquirir sus productos en
                    <br />línea, al igual que los métodos de pago sean de manera fácil y sencilla para ellos.</p>
            </div>
            <div className=" text-fuchsia-700 ml-44 text-2xl h-14 font-bold  text-center">
                <h2>Desarrolladores de la Aplicación Web</h2>
            </div>
            <div className="text-white text-center font-semibold">
                <ul className="">
                    <li className="h-10">Wilberth Cahuich</li>
                    <img className="w-80 mx-auto block" src="/img/coronao.jpeg" alt="Buiiild"/>
                    <Link to="https://instagram.com/kawy40?igshid=MzRlODBiNWFlZA=="><box-icon name='instagram' type='logo' flip='vertical' animation='tada' color='#a21ca5'></box-icon></Link>
                    <Link to=""><box-icon name='linkedin-square' type='logo' flip='vertical' animation='tada' color='#a21ca5' ></box-icon></Link>
                    <li className="h-10">Jose Coronado</li>
                    <img className="w-80 mx-auto block" src="/img/coronao.jpeg" alt=""/>
                    <Link to="https://instagram.com/coronado_ja04?igshid=ZDc4ODBmNjlmNQ=="><box-icon name='instagram' type='logo' flip='vertical' animation='tada' color='#a21ca5'></box-icon></Link>
                    <Link to=""><box-icon name='linkedin-square' type='logo' flip='vertical' animation='tada' color='#a21ca5' ></box-icon></Link>
                </ul>
            </div>
            <div>
            </div>
        </div>
    )

}

export default Nosotros;