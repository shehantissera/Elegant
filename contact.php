<?php
/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
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
                        <h1>Contact <span class="vc_main-color">Us</span></h1>
                        <ul class="breadcrumb">
                            <li><a href="index.php">Home</a> <span class="divider">/</span></li>
                            <li class="active">Contact Us</li>
                        </ul>
                    </div>
                </div>
                <!-- wrapper --> 
            </div>
            <!-- vc_banner -->

            <div class="vc_map block" style="">
                <div class="wrapper">
                    <div id="map" class="map"> </div>
                </div>
                <!-- .wrapper --> 
            </div>
            <!-- .vc_map -->

            <div class="vc_contact-us">
                <div class="wrapper">
                    <div class="container">
                        <div class="row-fluid">
                            <div class="span8">
                                <h2>Send Us an <span class="vc_main-color">Email</span></h2>
                                <p>Thank you for visiting our site. You can also visit the other two websites to find more information about us and our service The websites are as <a href="http://www.srilanka-trips.com">www.srilanka-trips.com</a> and <a href="http://www.srilanka-erickson.com/">www.srilanka-erickson.com</a>. Please feel free to email or contact us for any inquiry. We are glad to help you with your issues.</p>
                                <div id="contact-form-result" style="display:none;">
                                    <div id="success" class="alert alert-success hidden">
                                        <button type="button" class="close" data-dismiss="alert">&times;</button>
                                        We have <strong>successfully</strong> received your Message and will get Back to you as soon as possible.</div>
                                    <div id="error" class="alert alert-error hidden">
                                        <button type="button" class="close" data-dismiss="alert">&times;</button>
                                    </div>
                                    <div id="empty" class="alert alert-error hidden">
                                        <button type="button" class="close" data-dismiss="alert">&times;</button>
                                        Please <strong>Fill up</strong> all the Fields and Try Again.</div>
                                    <div id="unexpected" class="alert alert-error hidden">
                                        <button type="button" class="close" data-dismiss="alert">&times;</button>
                                        An <strong>unexpected error</strong> occured. Please Try Again later.</div>
                                </div>
                                <form id="contact-form" name="contact-form" action="php/contact.php" method="post" />
                                <input type="hidden" value="info@venmond.com" name="admin-email" id="admin-email" />
                                <input type="hidden" value="Venmond, Inc." name="admin-name" id="admin-name" />
                                <div class="row-fluid">
                                    <div class="span4">
                                        <div class="control-group">
                                            <label class="control-label" for="contact-form-name">Name<span class="vc_red">*</span></label>
                                            <div class="controls">
                                                <input type="text" placeholder="" id="contact-form-name" name="contact-form-name" required="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="span4">
                                        <div class="control-group">
                                            <label class="control-label" for="contact-form-email">Email<span class="vc_red">*</span></label>
                                            <div class="controls">
                                                <input type="email" placeholder="" id="contact-form-email" name="contact-form-email" required="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="span4">
                                        <div class="control-group">
                                            <label class="control-label" for="contact-form-service">Service</label>
                                            <div class="controls">
                                                <select id="contact-form-service" name="contact-form-service">
                                                    <option />Information
                                                    <option />Tour Inquiry
                                                </select>
                                            </div>
                                        </div>
                                    </div> <!-- span4 -->
                                </div> <!-- roe-fluid -->
                                <div class="row-fluid">
                                    <div class="span12">
                                        <div class="control-group"><label for="contact-form-subject">Subject<span class="vc_red">*</span></label>

                                            <div class="controls">
                                                <input type="text" placeholder="" id="contact-form-subject" name="contact-form-subject" style="width:95%;" required="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row-fluid">
                                    <div class="span12">
                                        <div class="control-group"><label for="contact-form-message">Message<span class="vc_red">*</span></label>

                                            <div class="controls">
                                                <textarea rows="10" cols="58" id="contact-form-message" name="contact-form-message" style="width:95%;" required=""></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row-fluid">
                                    <div class="span12">
                                        <button class="vc_btn" type="submit" id="contact-form-submit" name="contact-form-submit" value="submit">Send Message</button>
                                    </div>
                                </div>
                                </form>
                            </div>
                            <!-- .span8 -->
                            <div class="span4 sidebar">
                                <div id="vc_contact-widget" class="sidebar-widget block">
                                    <div class="content">
                                        <div class="contact-info">
                                            <h4 class="vc_bg-blue"><i class="icon-map-marker"></i> Our Headquarters</h4>
                                            <div class="content">
                                                <ul class="vc_li">
                                                    <li>MErickson Tours & Travels Pvt. Ltd.<br />
														No. 25<br />
                                                        Mark Road,<br />
                                                        Periyamulla,<br />
                                                        Negombo, 11500<br>
                                                        Sri Lanka.
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="contact-info">
                                            <h4 class="vc_bg-orange"><i class="icon-phone"></i> Call us</h4>
                                            <div class="content">
                                                <ul class="vc_li">
                                                    <li>Mobile: +94-777-374-013</li>
                                                    <li>Phone: +94-312-239-524</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="contact-info">
                                            <h4 class="vc_bg-green"><i class="icon-envelope-alt"></i> Email Addresses</h4>
                                            <div class="content">
                                                <ul class="vc_li">
                                                    <li>ericksontissera@yahoo.com</li>
                                                    <li>shehanproductions@ymail.com</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="contact-info">
                                            <h4 class="vc_bg-red"><i class="icon-time"></i> Business Hours</h4>
                                            <div class="content">
                                                <ul class="vc_li">
                                                    <li>Available 24/7, 365 Days</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- .span4 -->           
                        </div>
                        <!-- .row-fluid -->         
                    </div>
                    <!-- .container -->        
                </div>
                <!-- .wrapper -->    
            </div>
            <!-- .vc_contact-us -->   

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

<!--        <script src="demo/demo.js"></script>-->

        <!-- InstanceBeginEditable name="script" --> 
        <!-- Specific Page Scripts Put Here --> 
        <script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false"></script> 
        <script type="text/javascript" src="js/jquery.gmap.min.js"></script> 
        <script type="text/javascript">
            $(document).ready(function() {
                $('#map').gMap({
                    address: 'Periyamulla, Sri Lanka',
                    maptype: 'ROADMAP',
                    zoom: 14,
                    markers: [
                        {
                            address: "Periyamulla, Sri Lanka",
                            html: '<div style="width: 300px; padding:10px;"><h3 style="padding-bottom: 5px;"  class="vc_main-color">Our Headquarter</h3><p>Our mission is to help people to <strong>earn</strong> and to <strong>learn</strong> online. We operate <strong>marketplaces</strong> where hundreds of thousands of people buy and sell digital goods every day, and a network of educational blogs where millions learn <strong>creative skills</strong>.<br/></p></div>',
                            icon: {
                                image: "img/blue.png",
                                iconsize: [42, 51],
                                iconanchor: [21, 51]
                            }
                        }
                    ],
                    doubleclickzoom: false,
                    controls: {
                        panControl: true,
                        zoomControl: true,
                        mapTypeControl: true,
                        scaleControl: false,
                        streetViewControl: false,
                        overviewMapControl: false
                    },
                });
            });
        </script> 
        <script type="text/javascript">
            $(document).ready(function() {
                var options = {
                    type: "POST",
                    url: $("#contact-form").attr('action'),
                    dataType: "json",
                    success: function(data) {
                        if (data.response == "success") {
                            $("#contact-form-result div").addClass('hidden');
                            $("#contact-form-result #success").removeClass('hidden');
                        } else if (data.response == "error") {
                            $("#contact-form-result div").addClass('hidden');
                            $("#contact-form-result #error").removeClass('hidden');
                            $("#contact-form-result #error").append(data.message);
                        } else if (data.response == "empty") {
                            $("#contact-form-result div").addClass('hidden');
                            $("#contact-form-result #empty").removeClass('hidden');
                        } else if (data.response == "unexpected") {
                            $("#contact-form-result div").addClass('hidden');
                            $("#contact-form-result #unexpected").removeClass('hidden');
                        }
                        $("#contact-form").find('#contact-form-submit #spin').remove();
                        $("#contact-form").find('#contact-form-submit').removeClass('disabled').removeAttr('disabled').blur();

                        $("#contact-form").fadeOut(500, function() {
                            $('#contact-form-result').fadeIn(500);
                        });
                    },
                    error: function() {
                        $("#contact-form-result div").addClass('hidden');
                        $("#contact-form-result #unexpected").removeClass('hidden');
                    }
                };

                $("#contact-form").validate({
                    submitHandler: function(form) {

                        $(form).find('#contact-form-submit').prepend('<i id="spin" class="icon-spinner icon-spin"></i>').addClass('disabled').attr('disabled');

                        $(form).ajaxSubmit(options);

                    },
                    success: function(form) {
                    }
                });
            });
        </script> 
        <!-- InstanceEndEditable -->

        <!-- Google Analytics: Change UA-XXXXX-X to be your site's ID. Go to http://www.google.com/analytics/ for more information. -->

        <script>
            var _gaq = _gaq || [];
            _gaq.push(['_setAccount', 'UA-43329142-2']);
            _gaq.push(['_trackPageview']);

            (function() {
                var ga = document.createElement('script');
                ga.type = 'text/javascript';
                ga.async = true;
                ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
                var s = document.getElementsByTagName('script')[0];
                s.parentNode.insertBefore(ga, s);
            })();
        </script>


    </body>
    <!-- InstanceEnd --></html>