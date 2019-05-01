package main 

import (
	"database/sql"
	"io"
	"net/http"
	"os"
	
	
	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
	
	_ "github.com/mattn/go-sqlite3"
	pusher "github.com/pusher/pusher-http-go"
	
)

func main() {
	db := initialiseDatabase("database/database.sqlite")
	
	migrateDatabse(db)
	
	e := echo.New()
	
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())
	
	e.File("/", "public/index.html")
	e.GET("/photos", getPhotos(db))
	e.POST("/photos", uploadPhoto(db))
	e.Static("/uploads", "public/uploads")
	
	e.Logger.Fatal(e.Start(":9000"))
	
}
	
