$(document).ready(function() {

    let modal = document.querySelector(".modal");

    $('#sleep').click(function(){
        showModal('Time to go to sleep!<br><br>We have a long day ahead of us aboard the International Space Station!');
    })

    $('#water').click(function(){
        showModal('Be sure to drink water, right now!');
    })

    $(function(){
        setTimeout(function(){
          renderActivityQuestion();
        }, 5000);
     });

     renderActivityQuestion = () => {
        let activityCheck = `<div>
        <p>Did you undergo any strenuous physical activity or exertion in the past 60 minutes?</p>
        <button id="activity-yes" class="button black">Yes</button>
        <button id="activity-no" class="button black">No</button>
        </div>
        `
        showModal(activityCheck);
     }

    $('#notifications').click(function(){
        $.ajax({
            type: 'GET',
            url: 'http://spaceappsto.herokuapp.com/api/notification/all',
            dataType: 'json',
            success: ((res) => {
                renderNotificationModal(res.notifications);
            }),
            error: ((xhr, ajaxOptions, thrownError) => {
                alert(`Something blew up: ${thrownError}`);
            })
        });
    })
    
    $('body').on('click', '#activity-yes', function () {
        showModal('Monitoring vitals.<br>No action required.');
    });

    $('body').on('click', '#activity-no', function () {
        showModal('Low quantity of iron detected. Administering treatment.');
    });

    $('.close-button').click(function(){
        closeModal();
    })

    function showModal(text) {
        $('.modal-text').html(text);
        modal.classList.add("show-modal");
    }

    function renderNotificationModal(data) {
        let tableString = `<table style="font-size: 18px;">
            <tr>
            <th>Message</th>
            <th>Read Status</th>
            <th>Timestamp</th>
            </tr>`;
        data.forEach((notification) => {
            tableString += `<tr>
            <td>${notification.message}</td>`
            notification.read ? tableString += `<td></td>` : tableString += `<td style="background-color: red; color: white; text-align: center;">NEW</td>`
            tableString += `<td>${notification.timestamp}</td></tr>`
        })
        tableString += `</table>`;
        showModal(tableString);
    }

    function closeModal(text) {
        $('.modal-text').html('');
        modal.classList.remove("show-modal");
    }
});