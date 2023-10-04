<img width=30% src="https://uploads-ssl.webflow.com/5f803b9261f6483ca515d44f/5ff7181a5d933f2cf9a7e690_1-1.png" />

# 💻 RESTful API Education System

## Table of Contents
- [Description](#description)
- [How to Use](#how-to-use)
  - [Step 1: Cloning the Repository](#step-1-cloning-the-repository)
  - [Step 2: Installing Dependencies](#step-2-installing-dependencies)
  - [Step 3: Starting the API](#step-3-starting-the-api)
  - [Step 4: Testing with Insomnia or Postman](#step-4-testing-with-insomnia-or-postman)
- [HTTP Requests](#http-requests)
- [BODY](#body)

## Description
This is a RESTful API for an education system. In it, you will have basic functions such as: listing instructors, searching for an instructor by ID, listing classes, searching for classes by ID, listing all classes of a specific instructor, registering an instructor, registering classes for an instructor, updating the instructor, their status, and even deleting the same.

## How to Use

- [1] In the terminal navigate to the directory you want to put the project and execute the command below: 

```
git clone https://github.com/Danmendua/RESTful-API-Education-System.git
```

- [2] When finished, navigate into the directory and execute the command below:

```
npm install
```
> This will install Express, which is a web framework for Node.js, and Nodemon, which is a tool for testing the API. Both are already present in the code, and you just need to use the 'install' command with npm.
> - Nodemon
> - Express

- [3] After the installation of the Express framework and the Nodemon tool is completed, run the command below to start the API.
```
npm run dev
```
<b>⚠️ It's important that you have [Node.js](https://nodejs.org/) installed on your computer, as well as some HTTP client tool, such as [Insomnia](https://insomnia.rest/download) or [Postman](https://www.postman.com/) to test the API.</b>

This will run the API

---

## HTTP Requests 

- [4] Now, simply create HTTP requests in Insomnia or Postman with the methods, **JSON body** and parameters below and test.

[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&weight=300&size=30&duration=2500&pause=500&color=8D8D8D&vCenter=true&width=435&lines=Class+Listings;Search+Instructors;Class+Listings;Search+Classes+ID;Search+Instructors'+Classes;Register+Instructors;Register+Classes+for+Instructors;Update+Instructors;Update+instructor+status;Delete+Instructors)](https://git.io/typing-svg)


| Method            | Name           | Routers                                           |
| :----------------: | :----------------: | :----------------------------------------------: |
| **GET**          | Instructors Listings          | http://localhost:3000/instrutores?senhaAdmin=123                |
| **GET**            | Search Instructors            | http://localhost:3000/instrutores/1                 |
| **GET**      | Class Listings      | http://localhost:3000/aulas?senhaAdmin=123            |
| **GET**          | Search Classes ID          | http://localhost:3000/aulas/1               |
| **GET**            | Search Instructors' Classes            | http://localhost:3000/instrutores/1/aulas                 |
| **POST**  | Register Instructors  | http://localhost:3000/instrutores/        |
| **POST**      | Register Classes for Instructors      | http://localhost:3000/instrutores/1/aulas            |
| **PUT**      | Update Instructors      | http://localhost:3000/instrutores/1            |
| **PATCH**      | Update instructor **status**      | http://localhost:3000/instrutores/1/status            |
| **DELETE**      | Delete Instructors      | http://localhost:3000/instrutores/1?senhaAdmin=123            |

## BODY

#### `GET`
```javascript
// no body request
```

#### `DELETE`
```javascript
// no body request
```

#### `POST` `http://localhost:3000/instrutores/` 
> Register Instructors
```json
{
	"nome": "Name instructor 1",
	"email": "Mail"
}
```
> (JSON body)

#### `POST` `http://localhost:3000/instrutores/1/aulas` 
> Register class for the instructor (/1/ is the instructor's ID)
```json
{
	"titulo": "Title",
	"descricao": "Description"
}
```
> (JSON body)

#### `PUT` `http://localhost:3000/instrutores/1` 
> Update Instructors (/1 is the instructor's ID)
```json
{
	"nome": "Name Instructor",
	"email": "Mail",
	"status": true
}
```
> (JSON body)

#### `PUT` `http://localhost:3000/instrutores/1/status` 
> (/1/ is the instructor's ID)
```json
{
	"status": true
}
```
> (JSON body)

It will look like this:

| ![Imagem 1](https://i.imgur.com/UtP2WnH.png) <br> Insomnia | ![Imagem 2](https://i.imgur.com/Anwu1En.png) <br> Postman |
| --- | --- |

| [Description](#description) | [How to use](#how-to-use) | [HTTP Requests](#http-requests) | [BODY](#body) |
| :-: | :-: | :-: | :-: |

## [ENJOY](https://github.com/Danmendua/)! 😊
