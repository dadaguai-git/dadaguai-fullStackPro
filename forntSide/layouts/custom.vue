<template>
	<d-layout>
		<d-header>
			<slot name="header"> Default header content </slot>
		</d-header>
		<d-content>
			<slot name="content"> Default content content </slot>
		</d-content>
		<d-footer>
			<slot name="footer"> Default footer content </slot>
		</d-footer>
	</d-layout>
</template>
