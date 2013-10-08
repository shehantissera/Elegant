<?php

?>

<!DOCTYPE html>
<html lang="en"><!-- InstanceBegin template="/Templates/index.dwt" codeOutsideHTMLIsLocked="false" -->
<head>
	<?php include_once "inc.head.php"; ?>
</head>
<body class="clearfix" data-smooth-scrolling="1">
<div class="vc_body">
  <header>
    <?php include_once "inc.navi.php"; ?>
  </header>
  <!-- Header Ends --> 
  
  <!-- InstanceBeginEditable name="content" -->
  <div class="vc_banner-title block">
    <div class="wrapper">
      <div class="container">
        <h1>Reviews</h1>
        <ul class="breadcrumb">
          <li><a href="index.php">Home</a> <span class="divider">/</span></li>
          <li><a href="about.php">About</a> <span class="divider">/</span></li>
          <li class="active">Reviews</li>
        </ul>
      </div>
    </div>
    <!-- wrapper --> 
  </div>
  <!-- vc_banner -->
  
  <div class="vc_portfolio block">
    <div class="wrapper">
      <div class="container">
        <ul id="portfolio-filter" class="nav nav-pills">
          <li class="active"><a href="#" data-filter="*">All</a></li>
		  		  
		  <?php
			
			require 'inc.connection.php';
			
			$query2 = "SELECT DISTINCT country FROM reviews";
			if($query_run2 = mysql_query($query2))
			{			
				while($rowz = mysql_fetch_assoc($query_run2))
				{
					$country = $rowz['country'];
					$num = str_word_count($country);

					if($num>1)
					{
						$madeup = str_replace(" ", "", $country);
						echo "<li><a href='#' data-filter='.".$madeup."'>".$country."</a></li>";
					}
					else
					{
						echo "<li><a href='#' data-filter='.".$country."'>".$country."</a></li>";
					}
				}
			}
			else
			{
				echo mysql_error();
			}
			
		  ?>
		  

        </ul>
        <div id="portfolio" class="portfolio-2 row clearfix">
		
		<?php
		  
			$query = "SELECT * FROM  `reviews` ORDER BY  `id` DESC ";
			if($query_run = mysql_query($query))
			{			
				while($rowz = mysql_fetch_assoc($query_run))
				{
					$name = $rowz['name'];
					$country = $rowz['country'];
					$date = $rowz['date'];
					$file = $rowz['file'];
					
					$num = str_word_count($country);

					if($num>1)
					{
						$country = str_replace(" ", "", $country);
					}
					
					echo "<div class='portfolio-item ".$country." span6'>";
					echo "	<div class='vc_anim vc_anim-slide'> <a href='portfolio-single-project.html' class='vc_preview'> <img alt='".$name."' src='img/portfolio/02.jpg' /> </a>";
					echo "	  <div class='vc_hover'>";
					echo "		<div class='hover-wrapper'>";
					echo "		  <div class='text-wrapper'>";
					echo "			<h4>".$name."</h4>";
					echo "			<h3>".$date."</h3>";
					echo "		  </div>";
					echo "		  <div class='icon-wrapper'>";
					echo "			<ul>";
					echo "			  <li class='vc_icon'> <a href='viewreview.php'> <i class='icon-link'> </i> </a> </li>";
					echo "			</ul>";
					echo "		  </div>";
					echo "		</div>";
					echo "	  </div>";
					echo "	  <div class='vc_category'> <i class='icon-picture'></i> </div>";
					echo "	</div>";
					echo "</div>";
				}
			}
			else
			{
				echo mysql_error();
			}
		  
		  ?>
		
		  
		</div>
        <!-- .row-fluid --> 
      </div>
      <!-- .container --> 
    </div>
    <!-- .wrapper --> 
  </div>
  <!-- .vc_portfolio --> 
  
  <!-- InstanceEndEditable --> 
  
  <!-- Middle Content Ends -->
  <footer>
    <?php include_once "inc.footer.php"; ?>
  </footer>
</div>
<a class="back-top" href="#" id="back-top"> <i class="icon-chevron-up icon-white"> </i> </a> 

<!-- Javascript =============================================== --> 
<!-- Placed at the end of the document so the pages load faster --> 
<script src="js/modernizr.js"></script> 
<script src="js/jquery.js"></script> 
<script src="js/bootstrap.min.js"></script> 
<script src="js/retina.js"></script> 
<script src="js/tinyscrollbar.js"></script> 
<script src="js/caroufredsel.js"></script> 
<script src="js/plugins.js"></script>
<script src="plugins/prettyPhoto-plugin/js/jquery.prettyPhoto.js"></script> 
<script src="plugins/isotope-plugin/js/jquery.isotope.min.js"></script> 
<script src="php/twitter/jquery.tweet.js"></script>
<script src="js/theme.js"></script>
<script src="js/custom.js"></script>


<!-- InstanceBeginEditable name="script" -->
<!-- Specific Page Scripts Put Here -->


<!-- InstanceEndEditable -->

<!-- Google Analytics: Change UA-XXXXX-X to be your site's ID. Go to http://www.google.com/analytics/ for more information. -->

<script>
    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-43329142-2']);
    _gaq.push(['_trackPageview']);

    (function() {
        var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    })();
</script>


</body>
<!-- InstanceEnd --></html>