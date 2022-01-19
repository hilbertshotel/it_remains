package routes

import (
	"net/http"
	"log"
	"it_remains/config"
)

func Mux(log *log.Logger, cfg *config.Config) *http.ServeMux {

	mux := http.NewServeMux()

	index := http.FileServer(http.Dir(cfg.IndexDir))
	mux.Handle("/", index)

    mux.Handle("/it_remains.log", http.FileServer(http.Dir("./logs/")))

	return mux
}
