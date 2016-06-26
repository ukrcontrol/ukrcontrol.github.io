// Filter script "show/hidden"

$('#main .filter-main div div').eq(0).click(function() {
	$('.filter-sub').addClass('hidden');
});
$('#main .filter-main div div').eq(1).click(function() {
	$('.filter-sub').addClass('hidden');
	$('.filter-sub').eq(0).removeClass('hidden');
});
$('#main .filter-main div div').eq(2).click(function() {
	$('.filter-sub').addClass('hidden');
	$('.filter-sub').eq(1).removeClass('hidden');
});
$('#main .filter-main div div').eq(3).click(function() {
	$('.filter-sub').addClass('hidden');
	$('.filter-sub').eq(2).removeClass('hidden');
});

$('#tysk .filter-main div div').eq(0).click(function() {
	$('.filter-sub').removeClass('hidden');
});
$('#tysk .filter-main div div').eq(1).click(function() {
	$('.filter-sub').addClass('hidden');
});
$('#tysk .filter-main div div').eq(2).click(function() {
	$('.filter-sub').addClass('hidden');
});