# 📊 Configurar Google Analytics + Microsoft Clarity

## 🎯 Por que usar Analytics?

Você vai descobrir:
- 📈 Quantas pessoas visitam o site
- 📱 De onde vêm (Instagram, Google, Facebook?)
- ⏱️ Quanto tempo ficam
- 💰 Quantos clicam em "Doar"
- 🌍 Qual cidade/estado mais doa

---

## 1️⃣ GOOGLE ANALYTICS (Grátis)

### Passo 1: Criar Conta

1. Acesse: https://analytics.google.com
2. Clique em "Começar a medir"
3. Nome da conta: `Conexão Onça Pintada`
4. Nome da propriedade: `Site ONG Onça`
5. Categoria: `Organizações sem fins lucrativos`
6. Tamanho da empresa: `1-10 funcionários`
7. URL do site: `https://ong.avila.inc`

### Passo 2: Copiar ID

Após criar, você receberá um **ID de Medição**:
```
G-ABC1234567
```

### Passo 3: Substituir no Código

Abra `index.html` e substitua nas **DUAS** ocorrências:

**Linha 67 e 72:**
```html
<!-- ANTES -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
...
gtag('config', 'G-XXXXXXXXXX');

<!-- DEPOIS -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-ABC1234567"></script>
...
gtag('config', 'G-ABC1234567');
```

### Passo 4: Fazer Commit

```powershell
git add index.html
git commit -m "feat: adiciona Google Analytics"
git push
```

### Passo 5: Verificar Funcionamento

1. Aguarde 5 minutos após deploy
2. Acesse: https://ong.avila.inc
3. Volte ao Google Analytics
4. Em "Relatórios em tempo real" → Deve aparecer você online! 🎉

---

## 2️⃣ MICROSOFT CLARITY (Grátis + Gravação de Sessões!)

**Vantagens sobre Google Analytics:**
- ✅ Vê exatamente como usuários navegam (vídeo)
- ✅ Heatmaps (onde clicam mais)
- ✅ Totalmente gratuito
- ✅ Funciona junto com Google Analytics

### Passo 1: Criar Projeto

1. Acesse: https://clarity.microsoft.com
2. Clique em "Get Started" (grátis)
3. Nome do projeto: `ONG Onça Pintada`
4. URL do site: `https://ong.avila.inc`
5. Categoria: `Non-profit organization`

### Passo 2: Copiar ID

Após criar, você receberá um **Project ID**:
```
abc123def456
```

### Passo 3: Substituir no Código

Abra `index.html` e substitua:

**Linha 81:**
```html
<!-- ANTES -->
})(window, document, "clarity", "script", "CLARITY-ID");

<!-- DEPOIS -->
})(window, document, "clarity", "script", "abc123def456");
```

### Passo 4: Fazer Commit

```powershell
git add index.html
git commit -m "feat: adiciona Microsoft Clarity"
git push
```

### Passo 5: Ver Gravações! 🎥

1. Aguarde 10 minutos após deploy
2. Acesse: https://clarity.microsoft.com/projects
3. Clique no projeto "ONG Onça Pintada"
4. Vá em "Recordings" → Veja VÍDEOS de pessoas navegando! 🤯

---

## 3️⃣ GOOGLE SEARCH CONSOLE (SEO)

### Para que serve?

- ✅ Ver quais palavras levam ao seu site no Google
- ✅ Quantas pessoas veem no Google (impressões)
- ✅ Quantas clicam (cliques)
- ✅ Posição média no ranking
- ✅ Erros de indexação

### Passo 1: Adicionar Propriedade

1. Acesse: https://search.google.com/search-console
2. Clique em "Adicionar propriedade"
3. Selecione "Prefixo de URL"
4. Digite: `https://ong.avila.inc`

### Passo 2: Verificar Propriedade

**Método mais fácil (Tag HTML):**

1. Search Console mostrará um código:
```html
<meta name="google-site-verification" content="abc123def456ghi789jkl" />
```

2. Abra `index.html` e substitua na **linha 16**:
```html
<!-- ANTES -->
<meta name="google-site-verification" content="GOOGLE-VERIFICATION-CODE" />

<!-- DEPOIS -->
<meta name="google-site-verification" content="abc123def456ghi789jkl" />
```

3. Fazer commit:
```powershell
git add index.html
git commit -m "feat: verifica Google Search Console"
git push
```

4. Aguarde 2 minutos e clique em "Verificar" no Search Console

### Passo 3: Enviar Sitemap

1. No Search Console, vá em "Sitemaps"
2. Adicione: `https://ong.avila.inc/sitemap.xml`
3. Clique em "Enviar"
4. Aguarde 1-2 dias para indexação

---

## 📊 Dashboard de Métricas

### Google Analytics - Ver Diariamente

**Relatórios Importantes:**
- **Tempo Real** → Quantos online agora
- **Aquisição** → De onde vêm (Instagram, Google, etc)
- **Comportamento** → Quais páginas mais acessadas
- **Conversões** → Quantos clicam em "Doar"

**Meta para 3 meses:**
- 🎯 1.000+ visitantes/mês
- 🎯 20+ doações/mês
- 🎯 Taxa de conversão > 2%

### Microsoft Clarity - Ver Semanalmente

**Análises Valiosas:**
- **Heatmaps** → Onde clicam mais (otimizar botão "Doar")
- **Scroll Maps** → Até onde rolam a página
- **Recordings** → Assistir pessoas navegando
- **Insights** → Clarity te dá sugestões automáticas!

### Google Search Console - Ver Mensalmente

**Palavras-chave mais buscadas:**
- "doar para onças"
- "ONG preservação onça pintada"
- "ajudar onças brasil"

**Otimizar SEO:**
- Se palavra aparece muito mas cliques são poucos = Melhorar title/description
- Se posição é alta (1-3) mas cliques são poucos = Melhorar copy

---

## 🎓 Dicas Pro

### 1. Configurar Metas no Google Analytics

**Meta: Clique no botão "Doar"**

1. Analytics → Configurações → Metas
2. Nova Meta → Personalizada
3. Tipo: Evento
4. Categoria: `button_click`
5. Ação: `donate`

Isso vai mostrar **taxa de conversão** (% que doa)!

### 2. Integrar com Google Tag Manager

Para tracking avançado:
1. Criar conta GTM: https://tagmanager.google.com
2. Adicionar código GTM no `index.html`
3. Configurar tags para:
   - Cliques em botões
   - Tempo na calculadora
   - Scroll depth
   - Compartilhamentos

### 3. Relatórios Semanais Automáticos

1. Google Analytics → Personalização → Alertas personalizados
2. Criar alerta: "Me avise se visitantes caírem 20% na semana"
3. Ou: "Me avise se doações aumentarem 50%"

---

## 📱 Apps Mobile

**Google Analytics:**
- iOS: https://apps.apple.com/app/google-analytics/id881599038
- Android: https://play.google.com/store/apps/details?id=com.google.android.apps.giant

**Microsoft Clarity:**
- Acesse pelo navegador mobile: https://clarity.microsoft.com

---

## ✅ CHECKLIST FINAL

- [ ] Google Analytics configurado
- [ ] Microsoft Clarity configurado
- [ ] Google Search Console verificado
- [ ] Sitemap enviado
- [ ] Testar: Ver você mesmo nos "Relatórios em tempo real"
- [ ] Testar: Ver gravação sua no Clarity depois de 10min
- [ ] Configurar alerta de visitantes diários > 50

---

## 🚀 Próximos Passos

Após 1 semana com dados:

1. **Analisar funil:**
   - 1000 visitantes → 100 veem calculadora → 20 doam = 2% conversão ✅
   - Se conversão < 1% = Melhorar botão "Doar" ou preços

2. **Otimizar tráfego:**
   - Se Instagram traz 70% = Focar posts lá
   - Se Google traz 20% = Melhorar SEO

3. **A/B Testing:**
   - Testar cores diferentes no botão "Doar"
   - Testar textos diferentes ("Doe R$ 150" vs "Alimente uma onça por 6 dias")

---

**Status:** Códigos já estão no `index.html` ✅  
**Falta:** Você substituir os IDs placeholders pelos IDs reais
