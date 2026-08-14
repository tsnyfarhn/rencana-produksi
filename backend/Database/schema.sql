SELECT 'CREATE DATABASE rencana_produksi_db'
WHERE NOT EXISTS (
    SELECT FROM pg_database
    WHERE datname = 'rencana_produksi_db'
)
\gexec