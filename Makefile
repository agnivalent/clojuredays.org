release:
	boot production build target pre-render
	mkdir -p docs
	cp -rf target/* docs/
	git add docs/
	git commit -m "Website updated on $(shell date)"
	git push

dev:
	boot dev
