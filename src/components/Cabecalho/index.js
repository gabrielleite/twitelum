import React, { Component } from 'react';
import 'cabecalho.css';
import 'navMenu.css';

class Cabecalho extends Component {

    render() {
        return (

            <header class="cabecalho">
                <div class="cabecalho__container container">
                    <h1 class="cabecalho__logo">
                        <a href="">Twitelum</a>
                    </h1>
                    <nav class="navMenu">
                        <ul class="navMenu__lista">
                            <li class="navMenu__item">
                                <a class="navMenu__link">
                                    Bem vindo(a): <br />
                                    <strong>@fulanodetal</strong>
                                </a>
                            </li>
                            <li class="navMenu__item">
                                <a class="navMenu__link" href="">Página Inicial</a>
                            </li>
                            <li class="navMenu__item">
                                <a class="navMenu__link">Hashtags</a>
                            </li>
                            <li class="navMenu__item">
                                <a class="navMenu__link">Logout</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

        );
    }
}

export default Cabecalho;