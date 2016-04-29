import {Component} from 'angular2/core';

export interface BossyTooltipConfig {
	text: string;
	align: string;
	position: string;
	color: string;
	type: string;
	progress: number;
	icon: string;
	iconFloat: string;
	persists: boolean;
}

@Component({
	selector: 'bossy-tooltip',
	templateUrl: 'app/components/bossy-tooltip.html',
	inputs: ['config'],
	styleUrls: ['app/components/_bossy-tooltip.css']
})

export class BossyTooltip{
	public config: BossyTooltipConfig;

	setAlignment(alignment) {
		// Anchor Alignment
		var alignmentClass = '';

		if (alignment) {
			if (alignment.toLowerCase() === 'left') {
				alignmentClass = 'bossy-tooltip-align-left';
			}
			else if (alignment.toLowerCase() === 'right') {
				alignmentClass = 'bossy-tooltip-align-right';
			}
		}

		return alignmentClass;
	};

	setActive(persist) {
		// Force tooltip to persist without hovering
		var activeClass = '';

		if (persist) {
			activeClass = 'active';
		}

		return activeClass;
	};

	setPositioning(position) {
		// tooltipPosition handles the position of the whole tooltip,
		// above, below, right, or left of the element requiring a tooltip
		var positionClass = '';

		if (position) {
			if (position.toLowerCase() === 'left') {
				positionClass = 'bossy-tooltip-pos-left';
			}
			else if (position.toLowerCase() === 'right') {
				positionClass = 'bossy-tooltip-pos-right';
			}
			else if (position.toLowerCase() === 'bottom') {
				positionClass = 'bossy-tooltip-pos-bottom';
			}
		}

		return positionClass;
	};

	setContentType(type) {
		// Content type
		var contentType = '';

		if (type) {
			if (type.toLowerCase() === 'download') {
				contentType = 'download';
			}
		}

		return contentType;
	};

	setIconFloat(direction) {
		// Float icon to left or right
		var iconDirection = '';

		if (direction) {
			if (direction.toLowerCase() === 'left') {
				iconDirection = 'icon-left';
			}
			else if (direction.toLowerCase() === 'right') {
				iconDirection = 'icon-right';
			}
		}

		return iconDirection;
	};
}