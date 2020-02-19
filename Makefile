run:
	deno \
		--importmap=import_map.json \
		--allow-env \
		--allow-net \
		--allow-read \
		main.js 