$( document ).ready(function() {
  new Chart(document.getElementById("pie-chart"), {
    type: 'pie',
    data: {
      labels: ["Quần ren đen", "Váy cánh tiên", "Chân váy chữ A"],
      datasets: [{
        label: "đơn vị (VND)",
        backgroundColor: ["#FFD700", "#556B2F","#E9967A"],
        data: [353,267,734]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'SẢN PHẨM BÁN CHẠY TRONG THÁNG'
      }
    }
});
  new Chart(document.getElementById("line-chart"), {
    type: 'line',
    data: {
      labels: ["Jan", "Feb","Mar","Apr","May","June"],
      datasets: [{
          data: [10,48,40,19,86,27,90],
          label: "Đà Nẵng",
          borderColor: "#FFD700",
          fill: false
        }, {
          data: [30,25,78,80,89,97],
          label: "Sài Gòn",
          borderColor: "#8e5ea2",
          fill: false
        }, {
          data: [25,59,65,70,75,80,100],
          label: "Hà Nội",
          borderColor: "#3cba9f",
          fill: false
        }
      ]
    },

    options: {
      title: {
        display: true,
        text: 'DOANH THU TỪNG THÁNG CỦA CÁC CHI NHÁNH (đvt: 1,000,000đ) '
      }
    }
  });
});

