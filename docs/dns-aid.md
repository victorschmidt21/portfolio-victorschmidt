# DNS for AI Discovery (DNS-AID) — pendente

## Por que não foi implementado neste repositório

O check "DNS for AI Discovery (DNS-AID)" pede a publicação de registros DNS
(`SVCB`/`HTTPS` em modo `ServiceMode`, ex.: `_a2a._agents.victorschmidt.dev`)
assinados com DNSSEC. Isso não é algo que dá pra resolver com código neste
repositório, por dois motivos:

1. **Não é uma mudança de aplicação, é de infraestrutura de DNS.** Os
   registros vivem no provedor de DNS/registrador do domínio
   `victorschmidt.dev` (ex.: Cloudflare, Registro.br, o registrador que for).
   Este repo não tem — e não deveria ter — credenciais de acesso a essa
   infraestrutura, nem existe hoje um DNS-as-code (Terraform, etc.) versionado
   aqui que eu pudesse editar.
2. **Assinar a zona com DNSSEC é uma operação de risco.** É uma mudança em
   infraestrutura compartilhada e ao vivo: se a rotação/assinatura de chaves
   sair errada, a resolução de todo o domínio pode quebrar até a correção.
   Não é algo pra aplicar de forma especulativa/automática.

Vale registrar também que `draft-mozleywilliams-dnsop-dnsaid` é um **draft
individual do IETF**, ainda não uma RFC — o formato pode mudar antes de virar
padrão.

## Como implementar (passo a passo, fora deste repo)

1. **Definir o endpoint real** que o registro vai anunciar. DNS-AID serve
   para apontar agentes para um serviço real (ex.: um endpoint A2A ou MCP).
   Hoje este site não expõe nenhum serviço desse tipo — então o primeiro
   passo real é decidir *o que* vai existir do outro lado antes de anunciar
   algo no DNS.
2. No provedor de DNS do domínio, criar um registro `SVCB` (ou `HTTPS`) em
   `ServiceMode` sob um nome bem-known, por exemplo:

   ```
   _a2a._agents.victorschmidt.dev.  3600  IN  SVCB  1 . alpn="h2" endpoint="https://victorschmidt.dev/.well-known/agent"
   ```

   - `1` = prioridade do SVCB (`ServiceMode`, prioridade > 0).
   - `alpn="h2"` = protocolo de aplicação suportado.
   - `endpoint="..."` = URL real do serviço/endpoint do agente.

3. **Habilitar DNSSEC na zona** — normalmente é uma opção no painel do
   provedor de DNS (gera as chaves KSK/ZSK e publica os registros `DNSKEY`/
   `DS`). Alguns provedores (Cloudflare, por exemplo) fazem isso com poucos
   cliques e gerenciam a rotação de chaves automaticamente.
4. Validar com uma ferramenta de terceiros (ex. `dig +dnssec`, ou o painel do
   próprio provedor) que os resolvers estão retornando dados autenticados.

## Recomendação

Tratar isso como um item de infraestrutura separado, revisitado quando (a)
existir um endpoint de agente real para anunciar, e (b) o draft
`dnsop-dnsaid` amadurecer ou virar RFC.
