package config

type Config struct {
	Addr string
	IndexDir string
}

func New() *Config {
	return &Config{
		Addr: "127.0.0.1:6789",
		IndexDir: "./frontend/",
	}
}