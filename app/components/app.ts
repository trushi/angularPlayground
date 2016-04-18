import {Component, OnInit} from 'angular2/core'
import {BossyAutocomplete , BossyAutocomplete Config} from 'app/components/bossy.autocomplete '

@Component({
	selector: 'my-app',
	template: `
		<div>Not here</div>
		<bossy-autocomplete  [config]="myConfig"><span>Autocomplete Testing!</span></bossy-autocomplete >
	`,
	directives: [BossyAutocomplete]
})

export class App implements OnInit{
	myConfig: BossyAutocomplete Config;

	ngOnInit() {
		this.myConfig = {
			'align': '',
			'color': '',
			'icon': '',
			'iconFloat': '',
			'persists': false,
			'position': '',
			'progress': 0,
			'text': 'This is a test again',
			'type': ''
		};
	}
}