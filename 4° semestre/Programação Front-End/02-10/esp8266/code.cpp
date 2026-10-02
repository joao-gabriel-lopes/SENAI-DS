#include <ESP8266WiFi.h>
#include <ESP8266WebServer.h>

const char* ssid = "douglas";
const char* password = "12345678";

ESP8266WebServer server(80);

const int LED = 5;

void enviarResposta(int codigo, String tipo, String mensagem) {
  server.sendHeader("Access-Control-Allow-Origin", "*");
  server.send(codigo, tipo, mensagem);
}

void handleRoot() {
  enviarResposta(200, "text/plain", "ESP8266 Pronto para receber comandos.");
}

void handleLigar() {
  digitalWrite(LED, HIGH);
  Serial.println("Comando: Ligar LED");
  enviarResposta(200, "application/json", "{\"status\": \"ligado\"}");
}

void handleDesligar() {
  digitalWrite(LED, LOW);
  Serial.println("Comando: Desligar LED");
  enviarResposta(200, "application/json", "{\"status\": \"desligado\"}");
}

void handleNotFound() {
  enviarResposta(404, "text/plain", "Rota nao encontrada");
}

void setup() {
  Serial.begin(115200);
  pinMode(LED, OUTPUT);
  digitalWrite(LED, HIGH);

  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("\nConectado!");
  Serial.print("Endereço IP: ");
  Serial.println(WiFi.localIP());

  server.on("/", handleRoot);
  server.on("/ligar", handleLigar);
  server.on("/desligar", handleDesligar);
  server.onNotFound(handleNotFound);

  server.begin();
  Serial.println("Servidor HTTP iniciado");
}

void loop() {
  server.handleClient();
}