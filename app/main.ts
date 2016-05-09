import {bootstrap} from 'angular2/platform/browser'
import {Component, OnInit} from 'angular2/core'
import {BossyAutocomplete} from 'app/components/bossy.autocomplete '

@Component({
	selector: 'my-app',
	template: `<p>hello W</p><bossy-autocomplete></bossy-autocomplete>`,
	directives: [BossyAutocomplete]
})

export class App {
}

bootstrap(App);