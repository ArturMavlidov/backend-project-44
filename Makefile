.PHONY: install

install:
	npm ci

.PHONY: brain-games

brain-games:
	node bin/brain-games.js

.PHONY: brain-even

brain-even:
	node bin/brain-even.js

.PHONY: brain-calc

brain-calc:
	node bin/brain-calc.js

.PHONY: brain-gcd

brain-gcd:
	node bin/brain-gcd.js

.PHONY: brain-progression

brain-progression:
	node bin/brain-progression.js

.PHONY: brain-prime

brain-prime:
	node bin/brain-prime.js

.PHONY: publish

publish:
	npm publish --dry-run

.PHONY: lint

lint:
	npx eslint .
