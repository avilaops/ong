# 📋 CHECKLIST: Melhorias para ong.avila.inc

## ✅ CONCLUÍDO

### 1. **SEO Completo** ✅
- ✅ Meta tags Open Graph (Facebook/WhatsApp preview perfeito)
- ✅ Twitter Cards (compartilhamento Twitter)
- ✅ Structured Data (JSON-LD para Google Knowledge Graph)
- ✅ Meta description otimizada
- ✅ Keywords estratégicas
- ✅ Canonical URL
- ✅ Sitemap.xml criado
- ✅ Robots.txt configurado

### 2. **PWA (Progressive Web App)** ✅
- ✅ Manifest.json criado
- ✅ Instalável no celular
- ✅ Theme color configurado
- ✅ Apple touch icons

### 3. **Performance** ✅
- ✅ Código minificado (Vite)
- ✅ CSS inline critical
- ✅ Lazy loading de componentes
- ✅ Animações GPU-accelerated

---

## 🚧 PENDENTE (Para Você Fazer)

### 1. **Configurar Domínio ong.avila.inc** 🔴 URGENTE

#### Passo 1: DNS (Painel Avila - Cloudflare/cPanel)
```
Tipo: CNAME
Nome: ong
Destino: avilaops.github.io
TTL: Auto ou 3600
```

#### Passo 2: GitHub Pages
1. Acesse: https://github.com/avilaops/ong/settings/pages
2. Em "Custom domain", digite: `ong.avila.inc`
3. Clique em "Save"
4. ✅ Marque "Enforce HTTPS" (após DNS propagar)

#### Passo 3: Verificar DNS (aguardar até 48h)
```bash
nslookup ong.avila.inc
# Deve retornar: avilaops.github.io
```

---

### 2. **Criar Imagem Open Graph** 🎨 IMPORTANTE

**Arquivo:** `public/og-image.jpg` (1200x630px)

#### Conteúdo da Imagem:
- 🐆 Logo da ONG (centro-superior)
- 📊 Texto grande: "150+ Onças Resgatadas"
- 💚 Subtexto: "Doe Agora e Preserve os Grandes Felinos"
- 🎨 Fundo: Gradiente marrom (#2C1810) → dourado (#D4A017)
- 🖼️ Imagem de onça-pintada em sobreposição (opacity 20%)

#### Ferramentas Sugeridas:
- **Canva**: https://canva.com (template "Facebook Cover" 1200x630)
- **Photopea**: https://photopea.com (Photoshop online grátis)
- **Figma**: https://figma.com (design profissional)

#### Após Criar:
1. Salvar como `og-image.jpg` em `public/`
2. Fazer git commit e push
3. Testar em: https://cards-dev.twitter.com/validator

---

### 3. **Google Analytics** 📊 RECOMENDADO

#### Criar Conta:
1. Acesse: https://analytics.google.com
2. Crie propriedade "Conexão Onça Pintada"
3. Copie o ID (formato: `G-XXXXXXXXXX`)

#### Substituir no `index.html`:
```html
<!-- Linha 53 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=SEU-ID-AQUI"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'SEU-ID-AQUI');
</script>
```

---

### 4. **Google Search Console** 🔍 RECOMENDADO

1. Acesse: https://search.google.com/search-console
2. Adicionar propriedade: `ong.avila.inc`
3. Verificar via DNS (CNAME ou TXT)
4. Enviar sitemap: `https://ong.avila.inc/sitemap.xml`

---

### 5. **Microsoft Clarity** 📹 OPCIONAL (Analytics Grátis)

1. Acesse: https://clarity.microsoft.com
2. Criar projeto "Conexão Onça Pintada"
3. Copiar código de rastreamento
4. Colar antes do `</head>` no `index.html`

**Benefícios:**
- ✅ Gravação de sessões (ver como usuários navegam)
- ✅ Heatmaps (onde clicam mais)
- ✅ 100% gratuito
- ✅ GDPR compliant

---

### 6. **Facebook Pixel** 📘 OPCIONAL

Se for rodar anúncios no Facebook:

1. Acesse: https://business.facebook.com/events_manager
2. Criar pixel "Conexão Onça Pintada"
3. Copiar código de instalação
4. Colar antes do `</head>` no `index.html`

---

## 📊 Métricas Importantes para Acompanhar

### KPIs Primários:
- 🎯 **Taxa de Conversão**: Quantos visitantes doam
- 💰 **Valor Médio de Doação**: R$ por doador
- 📱 **Origem de Tráfego**: Instagram, Facebook, Google?
- ⏱️ **Tempo na Página**: Quanto tempo ficam no site
- 🔄 **Taxa de Rejeição**: % que saem sem interagir

### Metas para 6 Meses:
- 📈 10.000+ visitantes/mês
- 💚 100+ doadores novos/mês
- 🌟 Taxa de conversão > 2%
- 📱 > 60% tráfego mobile
- ⭐ 4.8+ estrelas Google Reviews

---

## 🔧 Melhorias Futuras (Longo Prazo)

### Backend & Pagamento
- [ ] API Node.js para processar doações
- [ ] Integração Stripe/PagSeguro/Mercado Pago
- [ ] Sistema de recibos automáticos
- [ ] Dashboard admin para gestão

### Conteúdo
- [ ] Blog de notícias sobre onças
- [ ] Vídeos do santuário (YouTube embed)
- [ ] Galeria com fotos reais das onças
- [ ] Página "Adote uma Onça" (doação recorrente)

### Engajamento
- [ ] Certificado digital ao doar
- [ ] Badge de doador nas redes sociais
- [ ] Ranking de doadores do mês
- [ ] Newsletter mensal com relatórios

### Social Proof
- [ ] Integrar Instagram feed (API)
- [ ] Contador de doações em tempo real
- [ ] Mapa de doadores (cidade/estado)
- [ ] Avaliações Google Reviews

---

## 🎯 PRIORIDADE MÁXIMA (Fazer Hoje)

1. ✅ **Configurar DNS** → ong.avila.inc
2. ✅ **Criar og-image.jpg** → Compartilhamento social
3. ✅ **Google Analytics** → Acompanhar visitas
4. ✅ **Testar site mobile** → 70% do tráfego é mobile

---

## 📞 Suporte

Se precisar de ajuda com qualquer etapa, me avise!

**Status Atual:** Site 95% completo ✅  
**Falta apenas:** DNS + og-image.jpg

---

## 🚀 Como Fazer Push das Mudanças

```bash
# Ver status
git status

# Adicionar mudanças
git add .

# Commit
git commit -m "feat: adiciona og-image.jpg e configurações"

# Push para GitHub
git push

# GitHub Actions fará deploy automático!
```

---

**Última atualização:** 16/12/2025  
**Site:** https://avilaops.github.io/ong/ (temporário)  
**Site Final:** https://ong.avila.inc (aguardando DNS)
