$(function () {
    dropselectFn()
    fileformFn();
    allChk();
});

function dropselectFn() {
    // 드롭메뉴(셀렉트 연결)
    $('.dropbtn[data-toggle=dropmenu]').on('click', function () {
        $(this)
            .closest('.dropselect')
            .find('.dropmenu')
            .toggleClass('active');
    });
    $('.dropselect .dropmenu li').on('click', function () {
        var idx = $(this).index();
        var txt = $(this).text();
        $(this)
            .closest('.dropselect')
            .find('select option')
            .eq(idx)
            .prop('selected', true)
            .siblings()
            .prop('selected', false);
        $(this)
            .closest('.dropselect')
            .find('.drop-toggle .in')
            .text(txt);
        $(this)
            .addClass('active')
            .siblings()
            .removeClass('active');
        $(this)
            .closest('.dropmenu')
            .removeClass('active');
        if ($(this).closest('form')) {
            $(this).closest('form').submit();
        }
    });
}

function fileformFn() {
    $('.fileform').on('change', function () {
        var files = this.files;
        // var limitSize = 5 * 1024 * 1024; // 파일 크기 제한
        var $filename = $('.fileform-wrapper .filename');
        if (files[0] == undefined) {
            $filename.text('선택된 파일없음');
            return;
        }
        // for (var n in files) {
        //     console.log(files[n].size);
        //     if (files[n].size > limitSize) return alert('파일크기가 10MB 보다 작아야합니다.')
        // }
        for (var i = 0; i < files.length; i++) {
            // console.log(files[i].size);
            // if (files[i].size > limitSize) return alert('파일크기가 5MB 보다 작아야합니다.');
        }
        if (files.length > 1 && files.length < 6) {
            $filename.text(files.length + '개 파일');
            return;
        } else if (files.length >= 6) {
            alert('최대 5개까지 가능합니다.');
            return;
        }
        $filename.text(files[0].name);
    });
}

// 모두 동의
function allChk() {
    $('.check-all').click(function () {
        var checkName = $(this).attr('data-check-name');
        $('.check-item[data-check-name="' + checkName + '"]').prop('checked', this.checked);
    });
}

// 달력 ui
function datePick() {
    $.datepicker.setDefaults({
        dateFormat: 'yy-mm-dd',
        prevText: '이전 달',
        nextText: '다음 달',
        monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        dayNames: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
        showMonthAfterYear: true,
        yearSuffix: '년'
    });
    $("input.date-ui").datepicker({
        // minDate: 0,
        dateFormat: 'yy-mm-dd'
    });
}