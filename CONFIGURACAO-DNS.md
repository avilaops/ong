# 🌐 Configuração DNS para ong.avila.inc

## ✅ PASSO A PASSO COMPLETO

### 1️⃣ Acessar Painel DNS da Avila

**Opções:**
- Se usar **Cloudflare**: https://dash.cloudflare.com
- Se usar **cPanel**: Acesse via painel de hospedagem
- Se usar **Registro.br**: https://registro.br

---

### 2️⃣ Adicionar Registro CNAME

```
Tipo: CNAME
Nome: ong (ou @ong)
Destino: avilaops.github.io
TTL: Auto (ou 3600)
Proxy: Desligado (ícone nuvem cinza no Cloudflare)
```

**⚠️ IMPORTANTE:**
- **NÃO** adicione `https://` ou `/`
- **NÃO** adicione ponto final `.` no destino
- Use exatamente: `avilaops.github.io`

---

### 3️⃣ Configurar no GitHub (AGUARDE DNS PROPAGAR PRIMEIRO)

1. Acesse: https://github.com/avilaops/ong/settings/pages
2. Em "Custom domain", digite: `ong.avila.inc`
3. Clique em **Save**
4. ⏳ Aguarde 1-2 minutos
5. ✅ Marque "Enforce HTTPS"

---

### 4️⃣ Verificar se Funcionou

**Comandos Windows (PowerShell):**
```powershell
# Verificar DNS
nslookup ong.avila.inc

# Deve retornar:
# Name:    avilaops.github.io
# Addresses:  185.199.108.153
#             185.199.109.153
#             185.199.110.153
#             185.199.111.153
```

**Teste no Navegador:**
```
https://ong.avila.inc
```

---

## ⏱️ Tempo de Propagação

| Provedor DNS | Tempo Médio |
|--------------|-------------|
| Cloudflare   | 1-5 minutos ⚡ |
| cPanel       | 15-30 minutos |
| Registro.br  | 1-4 horas |
| Máximo       | 48 horas |

---

## ❌ Problemas Comuns

### Erro: "DNS não encontrado"
**Solução:** Aguarde mais tempo (até 48h) ou verifique se:
- Nome está correto: `ong`
- Destino está correto: `avilaops.github.io`
- Proxy está desligado (Cloudflare)

### Erro: "404 - There isn't a GitHub Pages site here"
**Solução:** 
1. Verifique se arquivo `CNAME` existe em `public/`
2. Faça novo commit e push
3. Aguarde GitHub Actions completar

### Erro: "HTTPS não funciona"
**Solução:** 
- Aguarde até 24h após DNS propagar
- GitHub precisa emitir certificado SSL
- Desmarque e marque novamente "Enforce HTTPS"

---

## 🔍 Ferramentas de Diagnóstico

**Verificar DNS Globalmente:**
https://dnschecker.org/#CNAME/ong.avila.inc

**Testar SSL:**
https://www.ssllabs.com/ssltest/analyze.html?d=ong.avila.inc

**Preview Open Graph:**
- Facebook: https://developers.facebook.com/tools/debug/
- Twitter: https://cards-dev.twitter.com/validator
- LinkedIn: https://www.linkedin.com/post-inspector/

---

## 📞 Suporte

Se tiver problemas, me avise com:
1. Screenshot do painel DNS
2. Resultado do comando `nslookup ong.avila.inc`
3. Mensagem de erro (se houver)

---

**Status do Arquivo CNAME:** ✅ Criado em `public/CNAME`  
**Próximo Deploy:** Automático via GitHub Actions
