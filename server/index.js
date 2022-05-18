import env from "dotenv";
import express from "express";

const app = express(); 

app.set("view engine", "pug");
app.set("views", "./pug");

app.get("/", (req, res) => {
    res.render("index");
});

app.use((req, res) => {
    res.render("404");
});