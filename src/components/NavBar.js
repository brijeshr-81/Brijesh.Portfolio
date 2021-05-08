import React from 'react';
import '../App.css';

function NavBar() {
    return (
        <header className="navbar_header">
            <nav className="navbar_nav">
                <div className="navbar_logo">
                    <img id="logo" src="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNTEyIDUxMiIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnPjxnPjxjaXJjbGUgY3g9IjI1NiIgY3k9IjI1NiIgZmlsbD0iIzA3ZTVjYSIgcj0iMjU2Ii8+PC9nPjxwYXRoIGQ9Im01MDUuNjU2IDMxMi44NDQtMTY0LjE0Ni0xNjQuMTQ2Yy0xNS4xMy0xOC42ODYtMTU5LjkyMy0xMS41MTEtMTU5LjkyMy0xMS41MTFsLTE5LjY0NCAyNTYuNzc3IDExNy4wMDIgMTE3LjAwMWMxMTEuNTM1LTkuOTA5IDIwMi40OTgtOTEuMzM0IDIyNi43MTEtMTk4LjEyMXoiIGZpbGw9IiMwMGI1OWIiLz48Zz48cGF0aCBkPSJtMjk0LjUzOSAzOTMuOTY0aC0xMzIuNTk3di0yNzUuOTI4aDExNS40NzFjNDUuNDY5IDAgODIuNDYgMzYuOTkyIDgyLjQ2IDgyLjQ2djIuMDQzYzAgMTUuNzE5LTQuNDIxIDMwLjQyNS0xMi4wODUgNDIuOTM5IDIuMTkxIDEuODA5IDQuMzAxIDMuNzM4IDYuMzI1IDUuNzg1IDE1LjYxMiAxNS43ODggMjQuMjEgMzYuNzEgMjQuMjEgNTguOTE0LjAwMSA0Ni4yMDEtMzcuNTg1IDgzLjc4Ny04My43ODQgODMuNzg3em0tNzQuNTk3LTU4aDc0LjU5NmMxNC4yMTggMCAyNS43ODYtMTEuNTY3IDI1Ljc4Ni0yNS43ODYgMC0xNC4wNjEtMTEuNDM5LTI1LjYyNy0yNS40OTgtMjUuNzg0bC02Ljc4My0uMDc2Yy0zLjQ4MS40NS03LjAyOC42ODItMTAuNjMuNjgyaC01Ny40NzF6bTAtMTA4Ljk2NGg1Ny40NzFjMTMuNDg3IDAgMjQuNDYtMTAuOTczIDI0LjQ2LTI0LjQ2di0yLjA0M2MwLTEzLjQ4OC0xMC45NzMtMjQuNDYtMjQuNDYtMjQuNDZoLTU3LjQ3MXoiIGZpbGw9IiNmOGZmZmIiLz48L2c+PGc+PHBhdGggZD0ibTM1NC4xMSAyNTEuMjZjLTIuMDItMi4wNC00LjEzLTMuOTctNi4zMi01Ljc4IDcuNjYtMTIuNTIgMTIuMDgtMjcuMjIgMTIuMDgtNDIuOTR2LTIuMDRjMC00NS40Ny0zNi45OS04Mi40Ni04Mi40Ni04Mi40NmgtMjEuNDF2NThoMjEuNDFjMTMuNDkgMCAyNC40NiAxMC45NyAyNC40NiAyNC40NnYyLjA0YzAgMTMuNDktMTAuOTcgMjQuNDYtMjQuNDYgMjQuNDZoLTIxLjQxdjU4aDIxLjQxYzMuNjEgMCA3LjE1LS4yMyAxMC42My0uNjhsNi43OS4wN2MxNC4wNi4xNiAyNS40OSAxMS43MyAyNS40OSAyNS43OSAwIDE0LjIyLTExLjU2IDI1Ljc4LTI1Ljc4IDI1Ljc4aC0zOC41NHY1OGgzOC41NGM0Ni4yIDAgODMuNzgtMzcuNTggODMuNzgtODMuNzggMC0yMi4yMS04LjU5LTQzLjEzLTI0LjIxLTU4LjkyeiIgZmlsbD0iI2Q4ZDhkOCIvPjwvZz48L2c+PC9zdmc+" 
                    height="50" width="50" alt="brijesh logo"/>
                </div>
                <div className="navbar_links">
                    <ol className="ordered_list">
                        <li><a href="/about">About</a></li>
                        <li><a href="/experience">Experience</a></li>
                        <li><a href="/about">Projects</a></li>
                        <li><a href="/about">Contact</a></li>
                    </ol>
                    <div className="resume">
                        <a className="Resume_Button" targer="_blank" rel="noopener noreferrer">Resume</a>
                    </div>
                </div>
                <div className="navbar_menu">
                    <a className="Menu_Button" targer="_blank" rel="noopener noreferrer">Menu</a>
                </div>
            </nav>
        </header>
    )
}

export default NavBar
