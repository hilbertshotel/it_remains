package main

import (
	"net/http"
	"time"
	"log"
	"os"
	"it_remains/config"
	"it_remains/routes"
)

func main() {

	log := log.New(os.Stdout, "", log.Ldate|log.Ltime|log.Lshortfile)
	cfg := config.New()

	api := http.Server{
		Addr: cfg.Addr,
		Handler: routes.Mux(log, cfg),
		ReadTimeout: time.Second*10,
		WriteTimeout: time.Second*10,
	}

	log.Println("Now listening @", cfg.Addr)
	err := api.ListenAndServe()
	if err != nil {
		log.Println(err)
	}

}