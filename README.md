# ClientSPA
Per far funzionare il progetto serve avviare il progetto "Restful", successivamente si può aprire la SPA
che consiste in una pagina Home in cui si possono richiedere le liste dei post e dei commenti ed anche gli stessi singolarmente,
ed in una seconda pagina azioni in cui si possono creare post o commenti.
Post e commenti in questa terza parte del progetto non sono correlati, ovvero non si possono risalire ai commenti di un determinato post
oppure commentare un post specifico.
IMPORTANTE: manca un modo per abilitare il CORS (il progetto non è realizzato con spring boot che risolverebbe con una annotation),
quindi per sviluppare e testare questa SPA è stata utilizzata un'estensione di Chrome chiamata "CORS Unblock", pur essendo
consapevole dei rischi di sicurezza.
Questa estensione ha permesso di effettuare tutte le richieste GET ma non permette i metodi POST.
